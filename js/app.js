
import{posts}from"./all_posts.js";import{subscribe_animation}from"./animation.js";import{render_main_links,render_pop_posts,render_posts,render_tags}from"./render.js";render_main_links()
subscribe_animation()
render_posts(posts)
render_pop_posts()
render_tags()