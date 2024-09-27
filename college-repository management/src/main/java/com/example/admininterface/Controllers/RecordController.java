package com.example.admininterface.controller;

import com.example.admininterface.model.Student;
import com.example.admininterface.model.Faculty;
import com.example.admininterface.service.RecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/records")
public class RecordController {
    @Autowired
    private RecordService recordService;

    @GetMapping("/students")
    public List<Student> getStudents() {
        return recordService.getAllStudents();
    }

    @PostMapping("/students")
    public Student addOrUpdateStudent(@RequestBody Student student) {
        return recordService.addOrUpdateStudent(student);
    }

    @DeleteMapping("/students/{id}")
    public void deleteStudent(@PathVariable Long id) {
        recordService.deleteStudent(id);
    }

    @GetMapping("/faculties")
    public List<Faculty> getFaculties() {
        return recordService.getAllFaculties();
    }

    @PostMapping("/faculties")
    public Faculty addOrUpdateFaculty(@RequestBody Faculty faculty) {
        return recordService.addOrUpdateFaculty(faculty);
    }

    @DeleteMapping("/faculties/{id}")
    public void deleteFaculty(@PathVariable Long id) {
        recordService.deleteFaculty(id);
    }
}
