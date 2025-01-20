package com.teamarc.leaflink.configs;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MapperConfig {

    @Bean
    public static ModelMapper modelMapper() {
        return new ModelMapper();

    }
}
