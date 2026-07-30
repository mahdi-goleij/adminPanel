import { useQuery } from "@tanstack/react-query"
import { baseApi } from "../api/baseApi"

export const useDashboard = () => {
    return useQuery({ queryKey: ['dashboard'], queryFn: 
        async()=> {
          return baseApi("/product/dashboard" , "GET" )
        }
       })
}