package com.myfm.springboot.controller;

import com.myfm.springboot.dto.Artist;
import com.myfm.springboot.dto.ArtistTracks;
import com.google.gson.*;
import com.google.gson.reflect.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.Collection;

@RestController
@PropertySource({"classpath:/application.properties"})
public class ArtistController {

    public static final String API_KEY = "&api_key=";
    public static final String FORMAT_JSON = "&format=json";
    public static final String TEXT = "#text";
    public static final String ATTR = "@attr";
    public static final String STR_TEXT = "text";
    public static final String STR_ATTR = "attr";

    @Value("${app.api_key}")
    private String apiKey;

    @Value("${app.baseLastFmUrl}")
    private String baseLastFmUrl;

    @Value("${app.topArtistUrl}")
    private String topArtistUrl;

    @Value("${app.topTracksUrl}")
    private String topTracksUrl;

    @Autowired
    private RestTemplate restTemplate;

    @RequestMapping("/")
    public ModelAndView index() {
        return new ModelAndView("/index.html");
    }

    /**
     * Get Popular list of artists based on selected country
     * @param country
     * @return
     * @throws Exception
     */
    @GetMapping("/popular-artist")
    public Collection<Artist> getPopularArtists(@RequestParam String country) throws Exception{
        //&page=1
        if(StringUtils.isEmpty(country)) {
            throw new IllegalArgumentException("{\"error\":\"Country Params is required\"}");
        }

        final String uri = baseLastFmUrl + topArtistUrl + country + "&limit=100" + API_KEY + apiKey + FORMAT_JSON;
        String result = restTemplate.getForObject(uri, String.class);
        result = result.replaceAll(TEXT, STR_TEXT);
        result = result.replaceAll(ATTR, STR_ATTR);

        JsonParser jsonParser = new JsonParser();
        JsonArray jsonArr = jsonParser.parse(result).getAsJsonObject().getAsJsonObject("topartists").getAsJsonArray("artist");

        Gson gson = new Gson();
        ArrayList<Artist> artistArray = gson.fromJson(jsonArr, new TypeToken<ArrayList<Artist>>(){}.getType());
        setAllImageUrl(artistArray);
        return artistArray;
    }

    /**
     * Get top tracks for selected Artist
     * @param name  Name of the artist
     * @return
     * @throws Exception
     */
    @GetMapping("/artist-tracks")
    public Collection<Artist> getArtistsTracks(@RequestParam String name) throws Exception{
        if(StringUtils.isEmpty(name)) {
            throw new IllegalArgumentException("{\"error\":\"Artist Name and ID Params is required\"}");
        }

        final String uri = baseLastFmUrl + topTracksUrl + name + "&limit=100" + API_KEY + apiKey + FORMAT_JSON;
        String result = restTemplate.getForObject(uri, String.class);
        result = result.replaceAll(TEXT, STR_TEXT);
        result = result.replaceAll(ATTR, STR_ATTR);

        JsonParser jsonParser = new JsonParser();
        JsonArray jsonArr = jsonParser.parse(result).getAsJsonObject().getAsJsonObject("toptracks").getAsJsonArray("track");

        Gson gson = new Gson();
        ArrayList<Artist> artistArray = gson.fromJson(jsonArr, new TypeToken<ArrayList<ArtistTracks>>(){}.getType());
        setAllImageUrl(artistArray);
        return artistArray;
    }

    /**
     * Loop through all Image URLS and set smallest one to Base DTO to use in UI
     * @param artistArray
     */
    private void setAllImageUrl(ArrayList<Artist> artistArray){
        if(!CollectionUtils.isEmpty(artistArray)) {
            for(Artist artist: artistArray){
                if(!CollectionUtils.isEmpty(artist.getImage())) {
                    artist.setImageUrl(artist.getImage().get(0).getText());
                }
            }
        }
    }
}
