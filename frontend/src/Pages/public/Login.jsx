export default function LoginPage(){
    return <div className="login-form">
        <div className="login-sec-1">

        </div>
        <div className="login-sec-2">
            <label htmlFor="login-number">
                <input type="number" name="login-number" id="login-number" placeholder="Admin phone number"/>
            </label>
            <label htmlFor="login-password">
                <input type="password" name="login-password" id="login-password" placeholder="password"/>
            </label>
            <button>Login</button>
        </div>
        <div className="login-sec-3"></div>
    </div>
}