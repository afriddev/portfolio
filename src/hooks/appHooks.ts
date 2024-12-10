import { useNavigate } from "react-router-dom";

export function useUpdateProjectDetails() {
  const navigate = useNavigate();

  function updateLocalStorage(value: string) {
    localStorage.setItem("selectedProject", value);
  }

  function updateProjectDetails(project: string) {
    updateLocalStorage(project);

    navigate("/projectdetail");
  }

  return { updateProjectDetails };
}
