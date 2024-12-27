# 🌐 Spatial Whatsapp UI Project 🟢💚

#### ✨ Quick Tip: If you're on VSCode, press `CTRL+SHIFT+P` then select `Markdown: Open Preview to the Side` for a better reading experience.

Welcome to the Spatial Whatsapp UI project! This project aims to provide a visually appealing and functional user interface for a Whatsapp-like application.

## 🚀 Getting Started

1. Clone the repository to your local machine.
2. Install the necessary dependencies using `npm install` or `yarn install`.
3. Run the project using `npm start` or `yarn start`.

## 📁 Project Structure

- `src/Assets`: Contains all the image assets used in the project.
- `src/components`: Contains the React components used in the project.
- `src/screens`: Contains the different screens of the application.
- `src/App.jsx`: The main entry point of the application.

## 🔑 Key Concepts

### 🎢 Tilt Effect

The tilt effect adds a 3D perspective to elements, making them appear to tilt based on mouse movement. This effect is achieved using CSS transforms and JavaScript event listeners.

#### Code Snippet

```javascript
// filepath: whatsapp_ui/src/helpers/tilt.js

function applyTiltEffect() {
  const cards = document.querySelectorAll(".tilt-card");
  let animationFrameId;

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        card.style.transform = `rotateX(${-y / 20}deg) rotateY(${x / 20}deg)`;
      });
    });

    card.addEventListener("mouseleave", () => {
      card.style.transition = "transform 0.5s ease";
      card.style.transform = "rotateX(0) rotateY(0)";
      setTimeout(() => {
        card.style.transition = "";
      }, 500);
    });
  });
}

export default applyTiltEffect;
```

### 🖼️ Perspective Container

The perspective container is an invisible container used to create a 3D effect. It is essential for the tilt effect to work correctly.

#### 👩🏻‍💻 Code Snippet

```jsx
// filepath: whatsapp_ui/src/components/screens/ChatScreen.jsx

return (
  <div
    className="bg w-full h-screen center-item"
    style={{ perspective: "1000px" }}
  >
    <div
      ref={tiltCardRef}
      className="tilt-card card w-[428px] h-[926px] bg-zinc-500/20 backdrop-blur rounded-md cursor-pointer"
    >
      <NavBar />
      <Stories />
      <Tabs />
      <ChatsContainer />
      <Menu />
    </div>
  </div>
);
```

### 🛤️ Routing

The project uses React Router for navigation between different screens.

#### 👩🏻‍💻 Code Snippet

```jsx
// filepath: whatsapp_ui/src/App.jsx

import { Routes, Route } from "react-router";
import ChatScreen from "./components/screens/ChatScreen";
import ChatRoom from "./components/screens/ChatRoom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ChatScreen />} />
      <Route path="/:id" element={<ChatRoom />} />
    </Routes>
  );
};

export default App;
```

### 📡 Fetching Simulations

Simulate data fetching to display user information.

#### 👩🏻‍💻 Code Snippet

```jsx
// filepath: whatsapp_ui/src/components/screens/ChatRoom.jsx

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { chatData } from "../../data/users";

const ChatRoom = () => {
  const { id } = useParams();
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchedUser = chatData.find((user) => user.id == id);
    setUser(fetchedUser);
  }, [id]);

  if (!chatData.find((user) => user.id == id)) {
    return <p className="text-rose-500 text-semibold">User Not Found!</p>;
  }

  return (
    // ...existing code...
  );
};

export default ChatRoom;
```

### 🧑‍🎨 Cool Avatars

Use image assets to display user avatars.

#### Code Snippet

```jsx
// filepath: whatsapp_ui/src/components/screens/ChatRoom.jsx

<div className="w-12 h-12 bg-slate-300 relative rounded-full">
  <img src={user.image} alt="img" className="w-full" />
  <div className="absolute w-[13px] h-[13px] border-2 border-white rounded-full bottom-0 right-0 bg-green-400"></div>
</div>
```

## 🧭 Explore and Learn

We encourage you to explore the rest of the project to learn more about routing, fetching simulations, and other cool features. Use this example as a guide to build your own projects.

## 🤝 Contributing

We welcome contributions from the community! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## 💬 Support

If this project helped you in any way, please consider subscribing to our YouTube channel _"(@Footprint Arts)"_ for more tutorials and updates. Your support means a lot to us!

Thank you for being a part of this project!

Happy coding! 🎉
