
# Personal Web Portfolio With Personal Blog

Hey Everyone !! I'm Dandy Candra and this my Personal Portfolio Website 
using for show my resume, store my independent projects, and writing My Personal
Blog.

This website built using Next.JS, Styled Components, and database
for store My Project and blog is using Supabase.

Link for Demo : https://dandycandra.vercel.app/

UI and Design inspired By [Brayden Wright](https://github.com/braydentw/braydentw.io)

All of doodle is draw by my self using adobe illustrator.




## Tech Stack

**Frontend:** Next JS

**Styling:** Styled Components

**Database:** Supabase

**State Management:** Redux

**Rich Text Editor:** TinyMCE

**Code Highlighting:** Prism

**Comment System:** Disqus

**Mobile Menu:** react-burger-menu

**Deploy:** Vercel


## Features

- Lovely UI and Design
- Store Personal Project
- Made Your Own Blog
- Admin Login
- Add Own Content
- Edit Posted Content
- Remove Posted Content
## Run Locally

Clone the project

```bash
  git clone https://github.com/Dandy-CP/WebPortfolio.git
```

Go to the project directory

```bash
  cd WebPortfolio
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Installation

You can clone my project and made your website using my Code

Frist thing frist clone project on my repository

made files call ```.env.local```

and copy yours own supabase secret code to ```.env.local``` files


```.env.local
NEXT_PUBLIC_SUPABASE_URL = Your Secrete URL
NEXT_PUBLIC_SUPABASE_ANON_KEY = Your Secrete Anon Key
```

On Supabase you can add your Own Table called ```MyProjects``` 
```BlogContentPost```

On ```MyProjects``` you can add your own column ```ProjectName``` 
```ProjectDescription``` ```githubLink``` ```demoLink```
```MyProjects``` ```tagTech``` ```cover```

On ```BlogContentPost``` you can add your own column ```postID```
```createdAt``` ```thumbnail``` ```Author``` ```titlePost``` ```Content```

On supabase storage you can add your own storage called ```myprojects``` and
```coverimage```

For Admin page you can visit http://localhost:3000/Admin
On Admin page you can manage all of yours posted content.

