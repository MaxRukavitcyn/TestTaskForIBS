package com.max.hand.test.task.service;

import com.max.hand.test.task.pojo.RequisitionPojo;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class MainService {

    private Map<Long, RequisitionPojo> requisitionPojoList = new HashMap<>();

    public MainService() {
        initRequisitionList();
    }

    private void initRequisitionList() {
        RequisitionPojo requisitionPojo1 = new RequisitionPojo(0, "name1", "addressFrom1@mail.ru", "addressTo1@mail.ru", true);
        RequisitionPojo requisitionPojo2 = new RequisitionPojo(1, "name2", "addressFrom2@mail.ru", "addressTo2@mail.ru", true);
        RequisitionPojo requisitionPojo3 = new RequisitionPojo(2, "name3", "addressFrom3@mail.ru", "addressTo3@mail.ru", true);
        RequisitionPojo requisitionPojo4 = new RequisitionPojo(3, "name4", "addressFrom4@mail.ru", "addressTo4@mail.ru", false);
        RequisitionPojo requisitionPojo5 = new RequisitionPojo(4, "name5", "addressFrom5@mail.ru", "addressTo5@mail.ru", false);

        requisitionPojoList.put(requisitionPojo1.getId(), requisitionPojo1);
        requisitionPojoList.put(requisitionPojo2.getId(),requisitionPojo2);
        requisitionPojoList.put(requisitionPojo3.getId(), requisitionPojo3);
        requisitionPojoList.put(requisitionPojo4.getId(), requisitionPojo4);
        requisitionPojoList.put(requisitionPojo5.getId(), requisitionPojo5);

    }

    public Map<Long, RequisitionPojo> getRequisitions() {
//        Collections.sort(requisitionPojoList, new Comparator<RequisitionPojo>() {
//            @Override
//            public int compare(RequisitionPojo o1, RequisitionPojo o2) {
//                return (int) (o1.getId() - o2.getId());
//            }
//        });

        return requisitionPojoList;
    }

    public Map<Long, RequisitionPojo> deleteById(long id) {
        System.out.println("удален элемент: " + requisitionPojoList);
        requisitionPojoList.remove(id);

        return requisitionPojoList;
    }

    public void addRequisitionPojo(RequisitionPojo requisitionPojo) {

        if (!requisitionPojoList.containsKey(requisitionPojo.getId())) {
            System.out.println("Добавлен объект: " + requisitionPojo);
            requisitionPojoList.put(requisitionPojo.getId(), requisitionPojo);
        } else {
            System.out.println("Такой объект уже есть");

        }

    }

    public void patchRequisitionList(RequisitionPojo requisitionPojo) {
        System.out.println("Изменен обект: " + requisitionPojo);

        if (!requisitionPojoList.containsKey(requisitionPojo.getId())) {
            requisitionPojoList.remove(requisitionPojo.getId());
            requisitionPojoList.put(requisitionPojo.getId(), requisitionPojo);
        }

    }
}
