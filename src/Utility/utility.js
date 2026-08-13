import toast from "react-hot-toast";

const getAppDataFLS = () => {
  const appId = localStorage.getItem("App");

  if (appId) {
    return JSON.parse(appId);
  }

  return [];
};

const setAppDataLSC = (id) => {
  const storedAppData = getAppDataFLS();

  if (storedAppData.includes(id)) {
     toast.error("App Already Exist");
    return;
  }

  storedAppData.push(id);

  const convertedAppData = JSON.stringify(storedAppData);

  localStorage.setItem("App", convertedAppData);
};

export { getAppDataFLS, setAppDataLSC };