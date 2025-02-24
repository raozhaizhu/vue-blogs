<template>
    <div class="home"></div>
</template>

<script>
export default {
    name: 'Home',
    components: {},
    data() {
        return {
            welcomeScreen: {
                title: 'Welcome!',
                blogPost:
                    'Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!',
                welcomeScreen: true,
                photo: 'coding',
            },
            sampleBlogPost: [
                {
                    title: 'Blog Wonderful Post',
                    blogHtml: 'Blog Post Content',
                    blogCoverPhoto: 'beautiful-photo',
                },
                {
                    title: 'Blog Post Title',
                    blogHtml: 'You will learn how to create a blog post in this tutorial',
                    blogCoverPhoto: 'beautiful-photo',
                },
                {
                    title: 'Blog New York',
                    blogHtml: 'And this is the last blog post',
                    blogCoverPhoto: 'beautiful-photo',
                },
            ],
        };
    },
};
</script>

