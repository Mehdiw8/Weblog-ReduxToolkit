import "./App.css";

function App() {
  return (
    <>
      <button
        style={{
          width: "100%",
          height: "100%",
         
          paddingTop: "16px",
          paddingBottom: "16px",
          background: "linear-gradient(98deg, #1B4019 0%, #81A54A 100%)",
          borderRadius: "16px",
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: "16px",
            fontFamily: "Lexend",
            fontWeight: 600,
            lineHeight: "24px",
            wordWrap: "break-word",
          }}
        >
          Book a free meeting
        </div>
      </button>
    </>
  );
}

export default App;
