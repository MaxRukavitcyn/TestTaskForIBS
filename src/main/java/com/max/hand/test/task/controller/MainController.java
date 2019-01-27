package com.max.hand.test.task.controller;

import com.max.hand.test.task.pojo.RequisitionPojo;
import com.max.hand.test.task.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/test")
public class MainController {

    @Autowired
    private MainService service;

    @RequestMapping("/")
    public void initList() {
        service.initRequisitionList();
    }

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public List<RequisitionPojo> getRequisitions() {

        return service.getRequisitions();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public List<RequisitionPojo> deleteById(@PathVariable int id) {
       return service.deleteById(id);
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public void addRequisition(@RequestBody RequisitionPojo requisitionPojo) {
        service.addRequisitionPojo(requisitionPojo);
    }
}
