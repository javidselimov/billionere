import { toast } from "react-toastify";
import { CertificateResponse, SignCertAndFiles, VerifyRequest } from "../interfaces/Services";


export const esign = {
  checkVersion,
  getCertificates,
  getFullSign: fullSign,
  verify,
  getFiles,
  getBasesign,
  getTsaClients,
};
const baseUrl = "http://localhost:18230/";
function getJSON(url: string): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(baseUrl + url);
      if (response?.ok) resolve(await response.json());
      else throw await response.json();
    } catch (error) {
      toast.error("Elektron imzalama zamanı problem yarandı");
    }
  });
}

function postData(url: string, body: any): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(baseUrl + url, {
        body: JSON.stringify(body),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response && response?.status === 200) resolve(await response.json());
      else throw await response.json();
    } catch (error) {
      reject(error);
    }
  });
}

function checkVersion() {
  return getJSON("version");
}

function getTsaClients() {
  return getJSON("api/v1/signer/tsaclients");
}

function getCertificates(): Promise<CertificateResponse> {
  return getJSON("api/v1/signer/readcertificatesfromstore");
}

function fullSign(body: SignCertAndFiles): Promise<any> {
  return postData("api/v1/signer/fullsign", body);
}

function verify(body: VerifyRequest) {
  return postData("verify", body);
}

function getFiles(body: VerifyRequest) {
  return postData("api/v1/signer/getfiles", body);
}

function getBasesign(body: any) {
  return postData("api/v1/signer/basesign", body);
}