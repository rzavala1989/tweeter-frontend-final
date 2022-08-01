/* eslint-disable prettier/prettier */
import React, { useContext, useState } from "react";
import { useDropzone } from "react-dropzone";
import { IDropzone } from "src/@types";
import { AuthContext } from "src/contexts/AuthContext";
import api from "src/services/api";
import { useSWRConfig } from "swr";

import { Loading } from "../Loading/Loading";
import * as S from "./styles";

const Dropzone: React.FC<IDropzone> = ({ imageName, setIsActive }) => {
    const { user, setUser } = useContext(AuthContext);
    const [isLoadingUpload, setIsLoadingUpload] = useState(false);
    const { mutate } = useSWRConfig();

    const onDropAccepted = async (file: File[]) => {
        const inputFile = file[0];
        const formData = new FormData();
        formData.append("file", inputFile);
        setIsLoadingUpload(true);
        await api
            .put(`/user/${user?.id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then(
                (response: {
                    data: { user: { avatar: any; id: any; name: any } };
                }) => {
                    setUser({
                        avatar: response.data.user.avatar,
                        id: response.data.user.id,
                        name: response.data.user.name,
                    });
                    mutate(`/user/${user?.id}`);
                },
            );
        setIsLoadingUpload(false);
        setIsActive && setIsActive(false);
    };
    const { getRootProps, getInputProps, isDragReject, isDragActive } =
        useDropzone({
            accept: "image/*",
            onDropAccepted,
        });
    return (
        <>
            <S.Container
                {...getRootProps()}
                isDragActive={isDragActive}
                isDragReject={isDragReject}
            >
                <div className="dropzone__container">
                    {isLoadingUpload ? (
                        <Loading />
                    ) : (
                        <>
                            <input
                                {...getInputProps()}
                                data-testid="input-file"
                            />

                            {isDragReject ? (
                                <p className="error">
                                    File not supported, drag and drop one file
                                    jpg, png or jpeg. Maximum size: 5MB
                                </p>
                            ) : (
                                <p>
                                    Drag and drop one file here, or click here
                                    to select file
                                </p>
                            )}
                        </>
                    )}
                </div>
            </S.Container>
        </>
    );
};

export default Dropzone;
