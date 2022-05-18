export default function UserGreeting() {
    const isLoggedIn = false;

    return (
    <>
    <h1>Welcome {isLoggedIn ? "User" : "Visitor"}!</h1> {/* ternary operator mode */}
    <h1>Welcome{isLoggedIn && " User"}!</h1>            {/* "short circuit" mode */}
    </>
    )
}
