import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div classNameName="App">
      <form id="form">
                <div className="title">LOG IN KOOP</div>
                  <div>
                    <label for="username">User Name</label>
                    <i className="fas fa-user"></i>
                    <input type="text" name="username"id="username" placeholder=" Elon Musk"/>
                    <i className="fas fa-exclamation-circle failure-icon"></i>
                    <i className="far fa-check-circle success-icon"></i>
                    <div className="error"></div>
                  </div>
                  <div>
                    <label for="email">Email</label>
                    <i className="far fa-envelope"></i>
                    <input type="email" name="email" id="email" placeholder="abc@gmail.com"/>
                    <i className="fas fa-exclamation-circle failure-icon"></i>
                    <i className="far fa-check-circle success-icon"></i>
                    <div className="error"></div>
                  </div>
                  <div>
                    <label for="password">Password</label>
                    <i className="fas fa-lock"></i>
                    <input type="password" name="password" id="password" placeholder="Password here"/>
                    <i className="fas fa-exclamation-circle failure-icon"></i>
                    <i className="far fa-check-circle success-icon"></i>
                    <div className="error"></div>
                    <button id="btn" type="submit">Submit</button>
                </div>
              </form>
          </div>
  );
}
export default App;
