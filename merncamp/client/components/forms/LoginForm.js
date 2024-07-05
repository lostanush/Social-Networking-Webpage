
import { SyncOutlined } from "@ant-design/icons";

const LoginForm = ({ 
    handleSubmit,email,password,setEmail,setPassword,loading })=> 
{
    return (
            
        <div 
        >
            <form onSubmit={handleSubmit}>
            
                <div className="form-group p-2">
                  <small>
                    <label className="text-muted">Email address :</label>
                  </small>
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="form-control"
                    value={email}
                    onChange={(x) => setEmail(x.target.value)}
                  ></input>
                </div>
            
                <div className="form-group p-2">
                  <small>
                    <label className="text-muted">Password :</label>
                  </small>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="form-control"
                    value={password}
                    onChange={(x) => setPassword(x.target.value)}
                  ></input>
                </div>
            
                <div className="form-group p-2">
                  <button 
                    disabled={ !email || !password}
                    className="btn btn-primary col-12"
                  >
                    {loading ? <SyncOutlined spin className="py-1"/> : 'Submit'}
                  </button>
                </div>
            </form>            
        </div>          
    )
}
export default LoginForm;