import {Form, redirect} from 'react-router-dom';

export const action = async ({request}) => {
    const formData = await request.formData();
    const loginId = formData.get('loginId');
    const password = formData.get('password');
    return redirect('/welcome/'+loginId);
}

const LoginPage = ()=> {

  return (
    <div className="LoginPage" style={{display:'flex',justifyContent:'center'}}>
        <div style={{border:'1px solid #606060',padding:'10px',borderRadius:'5px'}}>
            <Form method="post">
                <div style={{padding:'10px'}}>
                    <span>Login ID: </span>
                    <input required id='loginId' name='loginId' style={{marginLeft:'7px'}}/>
                </div>
                <div style={{padding:'10px'}}>
                    <span>Password: </span>
                    <input required type='password' id='password' name='password'/>
                </div>
                <div style={{textAlign:'center'}}><button type="submit">Login</button></div>
            </Form>
        </div>
    </div>
  );
}

export default LoginPage;
