import collaboration from "../assets/icons/collaboration.png"
import finance from "../assets/icons/finance.png"
import help from "../assets/icons/help.png"
import hr from "../assets/icons/hr.png"
import inbox from "../assets/icons/inbox.png"
import manage_clients from "../assets/icons/manage_clients.png"
import manage_orders from "../assets/icons/manage_orders.png"
import manage_partners from "../assets/icons/manage_partners.png"
import settings from "../assets/icons/settings.png"
import system from "../assets/icons/system.png"


export const menu = [
    {
        id:"1",
        name: "Collaboration",
        icon: collaboration,
        arrow: true
    },
    {
        id:"2",
        name: "Humane Resources",
        icon: hr,
        arrow: true
    },
    {
        id:"3",
        name: "Manage Clients",
        icon: manage_clients,
        arrow: true
    },
    {
        id:"4",
        name: "Manage Partners",
        icon: manage_partners,
        arrow: true
    },
    {
        id:"5",
        name: "Manage Orders",
        icon: manage_orders,
        arrow: true
    },
    {
        id:"6",
        name: "Finance",
        icon: finance,
        arrow: true
    },
    {
        id:"7",
        name: "Inbox",
        icon: inbox,
        arrow: true
    },
    {
        id:"8",
        name: "System information",
        icon: system,
        arrow: false
    },
    {
        id:"9",
        name: "Need Help ?",
        icon: help,
        arrow: false
    },
    {
        id:"10",
        name: "Settings",
        icon: settings,
        arrow: false
    }
]

export const filters = [
    {
        id:1,
        type:"Sorted By",
        value: "Newest"
    },
    {
        id:2,
        type:"Role",
        value: "HR Manager"
    },
    {
        id:3,
        type:"sub Dep",
        value: "HR Kolding"
    }
]

export const pagination = [
    {
        id:1,
        value:"left",
        active:false
    },
    {
        id:2,
        value:"1",
        active:false
    },
    {
        id:3,
        value:"2",
        active:true
    },
    {
        id:4,
        value:"3",
        active:false
    },
    {
        id:5,
        value:"right",
        active:false
    }
]

export const tableHeaders = [
    {
        id:1,
        value:"User ID"
    },
    {
        id:2,
        value:"Full Name"
    },
    {
        id:3,
        value:"join date"
    },
    {
        id:4,
        value:"Role"
    },
    {
        id:5,
        value:"Phone"
    },
    {
        id:6,
        value:"Email"
    },
    {
        id:7,
        value:"Status"
    },
    {
        id:8,
        value:"Actions"
    }
]

export const users = [
    {
        id:1,
        userId: "USR24542",
        fullName: "Fath Allah Karim",
        joinDate: "@01-11-2022",
        role: "HR Manager",
        phone: "+33 562 3252 235",
        email: "vitolkerMail@gmail.com",
        status: "blocked"
    },
    {
        id:2,
        userId: "USR24542",
        fullName: "Fath Allah Karim",
        joinDate: "@01-11-2022",
        role: "HR Manager",
        phone: "+33 562 3252 235",
        email: "vitolkerMail@gmail.com",
        status: "active"
    },
    {
        id:3,
        userId: "USR24542",
        fullName: "Fath Allah Karim",
        joinDate: "@01-11-2022",
        role: "HR Manager",
        phone: "+33 562 3252 235",
        email: "vitolkerMail@gmail.com",
        status: "active"
    },
    {
        id:4,
        userId: "USR24542",
        fullName: "Fath Allah Karim",
        joinDate: "@01-11-2022",
        role: "HR Manager",
        phone: "+33 562 3252 235",
        email: "vitolkerMail@gmail.com",
        status: "active"
    },
    {
        id:5,
        userId: "USR24542",
        fullName: "Fath Allah Karim",
        joinDate: "@01-11-2022",
        role: "HR Manager",
        phone: "+33 562 3252 235",
        email: "vitolkerMail@gmail.com",
        status: "active"
    },
    {
        id:6,
        userId: "USR24542",
        fullName: "Fath Allah Karim",
        joinDate: "@01-11-2022",
        role: "HR Manager",
        phone: "+33 562 3252 235",
        email: "vitolkerMail@gmail.com",
        status: "active"
    },
    {
        id:7,
        userId: "USR24542",
        fullName: "Fath Allah Karim",
        joinDate: "@01-11-2022",
        role: "HR Manager",
        phone: "+33 562 3252 235",
        email: "vitolkerMail@gmail.com",
        status: "blocked"
    },
    {
        id:8,
        userId: "USR24542",
        fullName: "Fath Allah Karim",
        joinDate: "@01-11-2022",
        role: "HR Manager",
        phone: "+33 562 3252 235",
        email: "vitolkerMail@gmail.com",
        status: "blocked"
    }
]