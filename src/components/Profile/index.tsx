import { ProtectedLayout } from "../Protected";
import {Button} from "antd";
import { useAuth } from "../../context/AuthProvider/useAuth";

export const Profile = ()=>{
    const auth = useAuth();
    function Sair(){
        auth.logout();
    }
    return(
        <ProtectedLayout>
            <div>
                <h2>foi</h2>

                <Button onClick={Sair}>

                </Button>
            </div>
            
        </ProtectedLayout>
    )
}