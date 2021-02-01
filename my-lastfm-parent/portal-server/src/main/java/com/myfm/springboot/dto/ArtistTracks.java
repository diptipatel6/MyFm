package com.myfm.springboot.dto;

public class ArtistTracks extends Artist{

    private String playcount;
    private String listeners;

    public String getPlayCount() {
        return playcount;
    }

    public void setPlayCount(String playCount) {
        this.playcount = playCount;
    }

    public String getListeners() {
        return listeners;
    }

    public void setListeners(String listeners) {
        this.listeners = listeners;
    }

}
