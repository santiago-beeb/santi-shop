import React from "react";
import { Layout } from '@containers/layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from "@pages/Login";
import { Checkout } from "@pages/Checkout";
import { CreateAccount } from "@pages/CreateAccount";
import { Home } from "@pages/Home";
import { MyAccount } from "@pages/MyAccount";
import { NewPassword } from "@pages/NewPassword";
import { NotFound } from "@pages/NotFound";
import { Orders } from "@pages/Orders";
import { PasswordRecovery } from "@pages/PasswordRecovery";
import { SendEmail } from "@pages/SendEmail";
import { AppContext } from "@context/AppContext";
import { useInitialState } from '@hooks/useInitialState';
import "@styles/global.css";

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter basename="/santi-shop/">
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/password-recovery" element={<PasswordRecovery />} />
            <Route exact path="/send-email" element={<SendEmail />} />
            <Route exact path="/new-password" element={<NewPassword />} />
            <Route exact path="/account" element={<MyAccount />} />
            <Route exact path="/signup" element={<CreateAccount />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/orders" element={<Orders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter> 
    </AppContext.Provider>
  )
}

export default App;
