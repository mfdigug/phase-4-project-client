import { useEffect, useContext, useState } from "react";
import { UserContext } from "./App";
import RequestCard from "./RequestCard";


const PendingRequests = () => {

  const currentUser = useContext(UserContext)
  const [pendingRequests, setPendingRequests] = useState([])

  useEffect(() => {
    if(!currentUser?.id) return;
    fetch(`/api/users/${currentUser.id}/pending_requests`)
    .then((r) => r.json())
    .then((data) => setPendingRequests(data))
  }, [currentUser])


  return (
    <div>
      <h2>PendingRequests</h2>
      <ul>
        {pendingRequests?.length > 0 ? (
        pendingRequests?.map((pending) => (
          <RequestCard key={pending.id} requestObj={pending}/>
        ))
      ) : (
        <p> No requests for approval</p>
      )}
      </ul>
    
    </div>
  ) 
};

export default PendingRequests;
