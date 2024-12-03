import React, { useState, useEffect, useCallback, useMemo } from "react";
import Student from "./student";
import ShoppingCart from "./shoppingCart";
interface Post {
  id: number;
  title: string;
}
function ReactHookComponent() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");
  const [data, setData] = useState<Post[]>([]);

  const handleClick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    document.title = title;
  });

  // cal api

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [count]);

  // useEffect(() => {
  //   setCount(prevState => (prevState + 1))
  // },[data]);

  // memory leak.
  const [showGotoTop, setShowGotoTop] = useState(false);

  useEffect(() => {
    console.log("sd");
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setShowGotoTop(true);
      } else {
        setShowGotoTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // tao state nhan du lieu

  return (
    <>
      <div>
        <h2>UseState Count {count}</h2>
        <button onClick={handleClick}>click me</button>
      </div>
      <div>
        <h2>UseEffect</h2>
        <div>
          {/*callback luon dc goi khi component mount*/}
          <label htmlFor="title">Enter title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          />
        </div>
        <div>
          {/* useEffect(callback, []) */}
          {/* call api */}
          <h2>API Data</h2>

          <ul>
            {data.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
          {showGotoTop && (
            <button
              style={{
                position: "fixed",
                bottom: 100,
                right: 20,
                zIndex: 999,
              }}
            >
              Go to top
            </button>
          )}
        </div>
      </div>
    </>
  );
}
function ReactHookComponentExample() {
//  return <Student/>
// chọn 1 trong 2 dòng return
 return <ShoppingCart/>
}

function Day4() {
  const [showReactHookComponent, setShowReactHookComponent] = useState(false);
  const handleToggleShowReactHookComponent = () => {
    setShowReactHookComponent(!showReactHookComponent);
  };

  const [showReactHookComponentExample, setShowReactHookComponentExample] =
    useState(false);
  const handleToggleShowReactHookComponentExample = () => {
    setShowReactHookComponentExample(!showReactHookComponentExample);
  };
  return (
    <div>
      <h1>Day 4</h1>
      <button onClick={handleToggleShowReactHookComponent}>
        Toggle React Hook Component
      </button>
      {showReactHookComponent && <ReactHookComponent />}

      <button onClick={handleToggleShowReactHookComponentExample}>
        Toggle React Hook Component Example
      </button>
      {showReactHookComponentExample && <ReactHookComponentExample />}
    </div>
  );
}
export default Day4;
