
// import BasicFuntions from './typescript/BasicFuntions'
//import BasicTypes from './typescript/BasicTypes'
//import ObjectLiterals from './typescript/ObjectLiterals'
//import Counter from "./components/Counter"
// se envuelve toda la aplicación en el componente AuthProvider, para que el estado de autenticación esté disponible en toda la aplicación. 
// LoginPage from "./components/LoginPage"
// import UsersPage from "./components/UsersPage"
import FormsPage from "./components/FormsPage"
import { AuthProvider } from "./context/AuthContext"

function App() {

  return (
    <>
    <AuthProvider> 
      <div className="flex flex-col justify-center items-center h-svh">
      <h1 className="text-3xl mb-5">React + TS</h1>
     {/* <BasicTypes /> */} 
     {/* <ObjectLiterals /> */}
     {/* <BasicFuntions/> */}
     {/* <Counter /> */}
      {/* <LoginPage /> */}
      {/* <UsersPage /> */}
      <FormsPage />
     </div>
    </AuthProvider>
    </>
  )
}

export default App
