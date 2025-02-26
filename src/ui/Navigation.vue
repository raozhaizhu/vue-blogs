<script>
import menuIcon from "../assets/Icons/bars-regular.svg";

export default {
    name: "navigation",
    components: {
        menuIcon,
    },
    data() {
        return {
            mobile: null,
            mobileNav: null,
            windowWidth: null,
        };
    },
    created() {
        window.addEventListener("resize", this.checkScreen);
        this.checkScreen();
    },
    methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 750) {
                this.mobile = true;
                return;
            } else {
                this.mobile = false;
                this.mobileNav = false;
                return;
            }
        },
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },
    },
};
</script>

<template>
    <header>
        <nav class="container">
            <div class="branding">
                <router-link class="header" :to="{ name: 'Home' }"
                    >RzzBlogs</router-link
                >
            </div>
            <div class="nav-links">
                <!-- @todo make it a component  -->
                <ul v-show="!mobile">
                    <router-links class="link" to="#">Home</router-links>
                    <router-links class="link" to="#">Blogs</router-links>
                    <router-links class="link" to="#">Create Post</router-links>
                    <router-links class="link" to="#"
                        >Login/Register</router-links
                    >
                </ul>
            </div>
        </nav>
        <menuIcon @click="toggleMobileNav" class="menu-icon" v-show="mobile" />
        <transition name="mobile-nav">
            <!-- @todo make it a component  -->
            <ul class="mobile-nav" v-show="mobileNav">
                <router-links class="link" to="#">Home</router-links>
                <router-links class="link" to="#">Blogs</router-links>
                <router-links class="link" to="#">Create Post</router-links>
                <router-links class="link" to="#">Login/Register</router-links>
            </ul>
        </transition>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: #fff;
    padding: 0 1.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    z-index: 99;
    .link {
        font-weight: 500;
        padding: 0;
        transition: 0.3s color ease;
        &:hover {
            color: #1eb8b8;
        }
    }
}
nav {
    display: flex;
    padding: 1.5rem 0;
    .branding {
        display: flex;
        align-items: center;
        .header {
            font-weight: 600;
            font-size: 1.5rem;
            color: #000;
            text-decoration: none;
        }
    }
    .nav-links {
        flex: 1;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        ul {
            margin-right: 2rem;
            .link {
                margin-right: 2rem;
            }
            .link:last-child {
                margin-right: 0;
            }
        }
    }
}
.menu-icon {
    cursor: pointer;
    position: absolute;
    top: 1.8rem;
    right: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
}
.mobile-nav {
    padding: 1.25rem;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #303030;
    top: 0;
    left: 0;
    .link {
        padding: 15px 0;
        color: #fff;
    }
}
.mobile-nav-enter-active,
.mobile-nav-leave-active {
    transition: all 1s ease;
}
.mobile-nav-enter,
.mobile-nav-leave-to {
    transform: translateX(-250px);
    opacity: 0;
}
.mobile-nav-enter-to {
    transform: translateX(0);
    opacity: 1;
}
</style>
