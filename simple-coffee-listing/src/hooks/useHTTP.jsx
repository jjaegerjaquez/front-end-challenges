const useHTTP = () => {
  const getRequest = async ({ url = '' }) => {
    return await fetch(`https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/${url}`)
    .then(response => response.json())
    .then(data => { return handleSuccessResponse(data) }  )
    .catch(error => console.error(error));
  }

  const handleSuccessResponse = (data) => {
    return {
      result: true,
      responseData: data,
    };
  }

  const handleErrorResponse = () => {

  }

  return {
    getRequest,
  };
}
 
export default useHTTP;