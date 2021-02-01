package com.myfm.springboot;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
public class Application {

//	@Value("${spring.application.name}")
//	private String name;

	public static void main(String[] args) {
		ApplicationContext ctx = SpringApplication.run(Application.class, args);
	}

//	@RequestMapping(value = "/")
//	public String name() {
//		return name;
//	}
	
}
