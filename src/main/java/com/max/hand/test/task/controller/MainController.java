package com.max.hand.test.task.controller;

import com.max.hand.test.task.pojo.RequisitionPojo;
import com.max.hand.test.task.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Map;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/test")
public class MainController {

    @Autowired
    private MainService service;

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public Map<Long, RequisitionPojo> getRequisitions() {

        return service.getRequisitions();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public Map<Long, RequisitionPojo> deleteById(@PathVariable long id) {
       return service.deleteById(id);
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public void addRequisition(@RequestBody RequisitionPojo requisitionPojo) {
        service.addRequisitionPojo(requisitionPojo);
    }

    @RequestMapping(value = "/patch", method = RequestMethod.PUT)
    public void patchRequisitionList(@RequestBody RequisitionPojo requisitionPojo) {
        service.patchRequisitionList(requisitionPojo);
    }
}
