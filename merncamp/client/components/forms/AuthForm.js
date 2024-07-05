
import { SyncOutlined } from "@ant-design/icons";

const AuthForm = ({ 
    handleSubmit,name,email,password,secret,
    setName,setEmail,setPassword,
    setSecret,loading })=> 
{
    return (
            
        <div 
        >
            <form onSubmit={handleSubmit}>
                <div className="form-group p-2">
                  <small>
                    <label className="text-muted">Username :</label>
                  </small>
                  <input
                    type="text"
                    placeholder="Enter username"
                    className="form-control"
                    value={name}
                    onChange={(x) => setName(x.target.value)}
                  ></input>
                </div>
            
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
                  <small>
                    <label className="text-muted">Select your question:</label>
                  </small>
                  <select className="form-control">
                    <option>which is your favourite animal ? </option>
                    <option>which is your favourite city ? </option>
                    <option>name your favourite colour ... </option>
                  </select>
                </div>
            
                <div className="form-group p-2">
                  <small>
                    <label className="text-muted">Write answer: </label>
                  </small>
                  <input
                    type="text"
                    placeholder="Enter answer"
                    className="form-control"
                    value={secret}
                    onChange={(x) => setSecret(x.target.value)}
                  ></input>
                </div>
            
                <div className="form-group p-2">
                  <button 
                    disabled={!name || !email || !password || !secret}
                    className="btn btn-primary col-12"
                  >
                    {loading ? <SyncOutlined spin className="py-1"/> : 'Submit'}
                  </button>
                </div>
            </form>            
        </div>          
    )
}
export default AuthForm;