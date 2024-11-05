import './App.css'; // Archivo de estilos CSS
import { RouterProvider } from 'react-router-dom'
import router from './routes/RoutesApp.jsx'
import { ThemeProvider, useTheme } from './themes/ThemeContext.jsx'


const MainContent = () => {
  const { light } = useTheme()

  return (
    <section className={light ? 'light' : 'dark'} >
        <RouterProvider router={router} />    
    </section>
  )
}

const App = () => {
   
  return (
    <>
      <ThemeProvider>
        <MainContent />
      </ThemeProvider>
    </>
  );
};

export default App;
