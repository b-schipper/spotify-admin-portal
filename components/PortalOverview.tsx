"use client";
import { getApplicationMetrics } from '@/services/admin-service';
import { axiosInstance } from '@/services/axios-service';
import { Metrics } from '@/types/types';
import { useEffect, useState } from "react";

const PortalOverview = () => {
  const [metrics, setMetrics] = useState<Metrics>();
  const instance = axiosInstance();

  useEffect(() => {
    fetchApplicationMetrics();
  }, [0]);

  const fetchApplicationMetrics = async () => {
    try {
      const data = await getApplicationMetrics(instance);
      setMetrics(data as Metrics);
    } catch (error) {
      console.error("Error fetching Metrics:", error);
    }
  }

  return (
    <div className="flex flex-row items-center mx-10">
      <div className="flex flex-col items-center">
        <h1>Application Metrics [only for admin]</h1>
        <span>Amount of users: {metrics?.userAmount}</span>
        <span>Amount of Artists: {metrics?.artistAmount}</span>
        <span>Amount of Admins: {metrics?.adminAmount}</span>
        <span>Amount of Songs: {metrics?.musicAmount}</span>
      </div>
    </div>
  );
}

export default PortalOverview;