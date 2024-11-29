import React from "react";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { instance } from "apis/axios";
import { toast } from "react-toastify";
import { HonorResponse, HonorRegistrationRequest } from "./type";
import { ErrorIcon, SuccessIcon } from "asset/img";

const router = "/honor";

export const usePostHonorRegistration = () => {
  const queryClient = useQueryClient();
  return useMutation<unknown, unknown, HonorRegistrationRequest>({
    mutationFn: data => instance.post(`${router}/honor/registration`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getRegistration"] });
      toast.success("데이터가 성공적으로 추가되었습니다", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeButton: false,
        icon: () => <img src={SuccessIcon} />,
      });
    },
    onError: () => {
      toast.error("데이터 추가에 실패했습니다", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeButton: false,
        icon: () => <img src={ErrorIcon} />,
      });
    },
  });
};

export const useGetHonor = () => {
  return useQuery({
    queryKey: ["getHonor"],
    queryFn: async () => {
      const { data } = await instance.get<HonorResponse[]>(`${router}`);
      return data;
    },
  });
};
