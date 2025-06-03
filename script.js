const testimonials = [
  {
    name: "Maria Bellman",
    photoURL:
      "https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    text: "Google has revolutionized the way we access and interact with information. Whether it's through its powerful search engine, user-friendly products like Gmail, Google Maps, or Google Drive, or its innovative contributions to AI and cloud computing, Google consistently delivers exceptional value. It's an indispensable part of my daily life and work, helping me stay connected, organized, and informed. I can't imagine navigating the digital world without it.",
  },
  {
    name: "Mark Ryan",
    photoURL:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfDJ8MHx8fDA%3D",
    text: "Apple has been a game-changer for me. Whether it's the intuitive design, top-notch performance, or the outstanding customer support, every aspect has exceeded my expectations. It's rare to find a service that delivers so consistently and efficiently. I genuinely recommend apple anyone looking for quality and reliability. It’s a name I now trust fully.",
  },
  {
    name: "Nicolas Horn",
    photoURL:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVzZXJ8ZW58MHwyfDB8fHww",
    text: "Facebook has been an incredible platform for staying connected with friends, family, and communities around the world. Its easy-to-use interface and wide range of features—from posts and stories to groups and events—make it more than just a social network. It’s a space where memories are shared, ideas are exchanged, and relationships are nurtured. Over the years, Facebook has played a key role in helping me stay in touch with loved ones and discover new interests.",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const userName = document.querySelector(".username");

let idx = 0;

function updateTestimonial(){
    const {name,photoURL,text} = testimonials[idx];
    imgEl.src = photoURL;
    textEl.innerText = text;
    userName.innerText = name;
    idx++;
    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(() => {
          updateTestimonial()
    },5000);
}

updateTestimonial();