package com.max.hand.test.task;

import com.max.hand.test.task.service.MainService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Main {

    public static void main(String[] args) {
        SpringApplication.run(Main.class);
        MainService service = new MainService();
        service.initRequisitionList();

    }
}
