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
                link: "#"
            },
            {
                icon: "fas fa-stethoscope",
                name: "Vaccinations",
                description: "Nullam convallis, orci in congue aliquet, diam mauris cursa urna, Id maximus lectus magna maximus",
                link: "#"
            },
            {
                icon: "fas fa-graduation-cap",
                name: "Education",
                description: "Nullam convallis, orci in congue aliquet, diam mauris cursa urna, Id maximus lectus magna maximus",
                link: "#"
            },
            {
                icon: "fab fa-pagelines",
                name: "Farming",
                description: "Nullam convallis, orci in congue aliquet, diam mauris cursa urna, Id maximus lectus magna maximus",
                link: "#"
            }
        ],
        recentCauses: [
            {
                link: "avada-charity-fair-trade-featured.jpg",
                alt: "Charity Trade"
            },
            {
                link: "avada-charity-shelter-featured.jpg",
                alt: "Charity Shelter"
            },
            {
                link: "avada-charity-farming-featured.jpg",
                alt: "Charity Farming"
            },
            {
                link: "avada-charity-vaccines-featured.jpg",
                alt: "Charity Vaccines"
            }
        ],
        featuredArticles: [
            {
                link: "photo-1444213007800-cff19e1677ac.jpg",
                name: "Understanding community complexities",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prasent ac nibh vestibulum, laoreet ipsum.",
                id: 1
            },
            {
                link: "photo-1444664597500-035db93e2323-177x142.jpg",
                name: "The human story of uniqueness",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prasent ac nibh vestibulum, laoreet ipsum.",
                id: 2
            },
            {
                link: "photo-1447430617419-95715602278e-177x142.jpg",
                name: "Sustainable trade tactics",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prasent ac nibh vestibulum, laoreet ipsum.",
                id: 3
            },
            {
                link: "photo-1460230525622-630fe3294cd7-177x142.jpg",
                name: "Farmers making a difference",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prasent ac nibh vestibulum, laoreet ipsum.",
                id: 4
            },
            {
                link: "photo-1460600421604-5e138c208b9c-177x142.jpg",
                name: "Meeting remote tribes in Peru",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prasent ac nibh vestibulum, laoreet ipsum.",
                id: 5
            }
        ],
        socialMedia: [
            {
                name: "Facebook",
                link: "#",
                icon: "fab fa-facebook-f"
            },
            {
                name: "Instagram",
                link: "#",
                icon: "fab fa-instagram"
            },
            {
                name: "Twitter",
                link: "#",
                icon: "fab fa-twitter"
            },
            {
                name: "Youtube",
                link: "#",
                icon: "fab fa-youtube"
            },
        ],
        scrollPosition: null,
    },
    methods: {
        // ---
        // This function will swap featured Article on click.
        // ---
        swapArticle: function(index) {

            let newValue = this.featuredArticles[index];
            let oldValue = this.featuredArticles[0];
            // ---
            // Vue.set will make the list reactive when changing order of items.
            // ---
            Vue.set(this.featuredArticles, 0, newValue)
            Vue.set(this.featuredArticles, index, oldValue)
        },
        // ---
        // This function will update scrollPosition on scrolling.
        // It will activate the background of the header Nav Bar.
        // ---
        updateScroll() {
            this.scrollPosition = window.scrollY
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    }
})