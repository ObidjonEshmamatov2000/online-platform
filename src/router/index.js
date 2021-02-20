import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import ManagerHome from "../views/manager/ManagerHome.vue";
import StudentHome from "../views/student/StudentHome.vue";
import TeacherHome from "../views/teacher/TeacherHome.vue";
import ManagerCourses from "../views/manager/Courses.vue";
import ManagerEvents from "../views/manager/Events.vue";
import ManagerStudentGroups from "../views/manager/StudentGroups.vue";
import ManagerStudents from "../views/manager/Students.vue";
import TeacherCourses from "../views/teacher/Courses.vue";
import TeacherGrades from "../views/teacher/Grades.vue";
import StudentCourses from "../views/student/Courses.vue";
import StudentGroups from "../views/student/StudentGroups.vue";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/managerhome",
    name: "ManagerHome",
    component: ManagerHome,
    children: [
      {
        path: "courses",
        name: "ManagerCourses",
        component: ManagerCourses,
      },
      {
        path: "events",
        name: "ManagerEvents",
        component: ManagerEvents,
      },
      {
        path: "studentgroups",
        name: "ManagerStudentGroups",
        component: ManagerStudentGroups,
      },
      {
        path: "students",
        name: "ManagerStudents",
        component: ManagerStudents,
      },
    ],
  },
  {
    path: "/studenthome",
    name: "StudentHome",
    component: StudentHome,
    children: [
      {
        path: "courses",
        name: "StudentCourses",
        component: StudentCourses,
      },
      {
        path: "groups",
        name: "StudentGroups",
        component: StudentGroups,
      },
    ],
  },
  {
    path: "/teacherhome",
    name: "TeacherHome",
    component: TeacherHome,
    children: [
      {
        path: "grades",
        name: "TeacherGrades",
        component: TeacherGrades,
      },
      {
        path: "courses",
        name: "TeacherCourses",
        component: TeacherCourses,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
