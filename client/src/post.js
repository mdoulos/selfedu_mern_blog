export default function Post() {
    return(
        <div className="post">
            <div className="image">
            <img src="https://techcrunch.com/wp-content/uploads/2021/03/ransomware-bryce.jpg?w=990&crop=1" alt="post" />
            </div>
            <div className="texts">
            <h2>US confirms federal agencies hit by MOVEit breach, as hackers list more victims</h2>
            <p className="info">
                <a href="#" className="author">Micah Doulos</a>
                <time>2023-06-17</time>
            </p>
            <p className="summary">The U.S. government has confirmed that multiple federal agencies have fallen victim to cyberattacks exploiting a security vulnerability in a popular file transfer tool.</p>
            </div>
        </div>
    );
}