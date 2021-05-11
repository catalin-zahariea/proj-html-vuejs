var app = new Vue ({
    el: "#root",
    data: {
        navBarLinks: [
            {
                name: "home",
                link: "#"
            },
            {
                name: "mission",
                link: "#"
            },
            {
                name: "causes",
                link: "#"
            },
            {
                name: "journal",
                link: "#"
            }
        ],
        achievements: [
            {
                icon: "far fa-heart",
                number: 2032,
                name: "Volunteers worldwide"
            },
            {
                icon: "fas fa-globe",
                number: 132,
                name: "Active projects"
            },
            {
                icon: "fas fa-dollar-sign",
                number: 3.8 + "M",
                name: "Donated"
            }
        ],
        values: [
            {
                icon: "fas fa-tint",
                name: "Clean Water",
                description: "Nullam convallis, orci in congue aliquet, diam mauris cursa urna, Id maximus lectus magna maximus",
            },
            {
                icon: "fas fa-stethoscope",
                name: "Vaccinations",
                description: "Nullam convallis, orci in congue aliquet, diam mauris cursa urna, Id maximus lectus magna maximus",
            },
            {
                icon: "fas fa-graduation-cap",
                name: "Education",
                description: "Nullam convallis, orci in congue aliquet, diam mauris cursa urna, Id maximus lectus magna maximus",
            },
            {
                icon: "fab fa-pagelines",
                name: "Farming",
                description: "Nullam convallis, orci in congue aliquet, diam mauris cursa urna, Id maximus lectus magna maximus",
            }
        ]
    }
})