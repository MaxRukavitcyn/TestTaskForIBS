package com.max.hand.test.task.service;

import com.max.hand.test.task.pojo.RequisitionPojo;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class MainService {

    private List<RequisitionPojo> requisitionPojoList = new ArrayList<>();

    public MainService() {
        initRequisitionList();
    }

    private void initRequisitionList() {
        RequisitionPojo requisitionPojo1 = new RequisitionPojo(1, "name1", "addressFrom1@mail.ru", "addressTo1@mail.ru", true);
        RequisitionPojo requisitionPojo2 = new RequisitionPojo(2, "name2", "addressFrom2@mail.ru", "addressTo2@mail.ru", true);
        RequisitionPojo requisitionPojo3 = new RequisitionPojo(3, "name3", "addressFrom3@mail.ru", "addressTo3@mail.ru", true);
        RequisitionPojo requisitionPojo4 = new RequisitionPojo(4, "name4", "addressFrom4@mail.ru", "addressTo4@mail.ru", false);
        RequisitionPojo requisitionPojo5 = new RequisitionPojo(5, "name5", "addressFrom5@mail.ru", "addressTo5@mail.ru", false);

        requisitionPojoList.add(requisitionPojo1);
        requisitionPojoList.add(requisitionPojo2);
        requisitionPojoList.add(requisitionPojo3);
        requisitionPojoList.add(requisitionPojo4);
        requisitionPojoList.add(requisitionPojo5);

        for(RequisitionPojo req: requisitionPojoList)
          System.out.println(req.getName());
    }

    public List<RequisitionPojo> getRequisitions() {
        return requisitionPojoList;
    }

    public List<RequisitionPojo> deleteById(int id) {
        System.out.println("удален элемент: " + requisitionPojoList.get(id).getName());
        requisitionPojoList.remove(id);

        return requisitionPojoList;
    }

    public void addRequisitionPojo(RequisitionPojo requisitionPojo) {
        System.out.println("Добавлен объект: " + requisitionPojo);
        requisitionPojoList.add(requisitionPojo);
    }
}
