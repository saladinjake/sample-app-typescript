import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Grid, GridItem, Heading, Flex, Avatar } from "components/shared/library";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "context/AuthContext";

import Main from "layout/Main";
import HeaderActions from "../components/HeaderActions";
import { Svg } from "assets/svg"


import { Input, Select, Radio, Button } from "components/shared/library";


import {
  createLinks,
  manageLinks,
} from "modules/UserDashboard/utilities/headerLinks";

import useForm, { hasError } from "utils/hooks/useForm";

import useSendToAPI from "utils/hooks/useSendToApi";
import { AuditLogData } from "utils/AuditLogData";
import {
 
  getUserById,
  
} from "api/services/User";

import { containsItem } from "utils";


const queryKeys = {
  getById: "user",
 
};

function UserDetail(){
  const defaultErrorTitle = "Region creation failed";
  const defaultErrorMessage =
    "Sample creation failed due to invalid inputs or your internet connection may be unstable.";
  const defaultSuccessTitle = "Branch created";
  const defaultSuccessMessage =
    "You have successfully created a new sample";
  const { id } = useParams();
  const [editable, setEditable] = useState(false);
  const [headerLinks, setHeaderLinks] = useState([]);
  const [showInformationModal, setShowInformationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorTitle, setErrorTitle] = useState(defaultErrorTitle);
  const [errorMessage, setErrorMessage] = useState(defaultErrorMessage);
  const [successTitle, setSuccessTitle] = useState(defaultSuccessTitle);
  const [successMessage, setSuccessMessage] = useState(defaultSuccessMessage);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const { user } = useContext(AuthContext);

  const [initialValues, setInitialValues] = useState({
    code: "",
    name: "",
    isHeadOffice: false,
    regionID: "",
    address: "",
    branchStatus: 0,
    isActive: false,
  });

  const [regions, setRegions] = useState([]);

  useEffect(() => {
    if (id === "create") {
      setEditable(true);
      setHeaderLinks(createLinks);
    } else {
      setHeaderLinks(manageLinks(id));
    }
  }, [id]);

  

  const navigate = useNavigate();

  const { isFetching } = useQuery(
    [queryKeys.getById, id],
    () => getUserById(id),
    {
      enabled: id !== "create",
      onSuccess({ data: response }) {
        setInitialValues((initialValues) => ({
          ...initialValues,
          
          
        }));
      },
    }
  );


 



  return (
    <Main
      subRoute
      subRouteLinks={headerLinks}
      headerActions={
          <HeaderActions
            isActive={initialValues.isActive}
            setEditable={setEditable}
            handleStatusUpdate={() => setShowAlertModal(true)}
          />
        
      }
    >
         <StyledInformationModal>

<Grid templateColumn="repeat(4,1fr)" gap="32px 49px">
        

        <GridItem>
          <Flex direction="row" alignItems="start" style={{
            borderRight:"1px solid #545F7D",
            height:"50px"
          }}>
            <Avatar 
              shape="rounded" type="text"
            />
            <Box ml="3">
            <DetailLabel>Saladin Jake</DetailLabel>
            <DetailValue>{"LSQFf587g90"}</DetailValue>
            </Box>
           
          </Flex>
        </GridItem>

        <GridItem>
          <Flex direction="column" alignItems="start" style={{
            borderRight:"1px solid #545F7D",
            height:"50px"
          }}>
            <DetailLabel>User's tier</DetailLabel>
            <DetailValue><Svg.TiersStar/><Svg.TiersStar/><Svg.TiersStar/></DetailValue>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex direction="column" alignItems="start" style={{
            height:"50px"
          }}>
            <DetailLabel>N200,0000.00</DetailLabel>
            <DetailValue>{"9912345678/Providus Bank"}</DetailValue>
          </Flex>
        </GridItem>

</Grid>
         </StyledInformationModal>

   <StyledInformationModal>

<Grid templateColumn="repeat(4,1fr)" gap="32px 49px">
        <GridItem colSpan={5}>
          <Flex justifyContent="start">
            <Heading text="Personal Information" />
          </Flex>
        </GridItem>

        <GridItem>
          <Flex direction="column" alignItems="start">
            <DetailLabel>Branch Name</DetailLabel>
            <DetailValue>{"sample"}</DetailValue>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex direction="column" alignItems="start">
            <DetailLabel>Branch Name</DetailLabel>
            <DetailValue>{"sample"}</DetailValue>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex direction="column" alignItems="start">
            <DetailLabel>Code</DetailLabel>
            <DetailValue>{"sample"}</DetailValue>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex direction="column" alignItems="start">
            <DetailLabel>Region</DetailLabel>
            <DetailValue>{"sample"}</DetailValue>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex direction="column" alignItems="start">
            <DetailLabel>Address</DetailLabel>
            <DetailValue>{"sample"}</DetailValue>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex direction="column" alignItems="start">
            <DetailLabel>Address</DetailLabel>
            <DetailValue>{"sample"}</DetailValue>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex direction="column" alignItems="start">
            <DetailLabel>Address</DetailLabel>
            <DetailValue>{"sample"}</DetailValue>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex direction="column" alignItems="start">
            <DetailLabel>Address</DetailLabel>
            <DetailValue>{"sample"}</DetailValue>
          </Flex>
        </GridItem>












        <GridItem colSpan={5}>
          <Flex justifyContent="start">
            <Heading text="Education And Employment" />
          </Flex>
        </GridItem>

        <GridItem>
          <Flex direction="column" alignItems="start">
            <DetailLabel>Branch Name</DetailLabel>
            <DetailValue>{"sample"}</DetailValue>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex direction="column" alignItems="start">
            <DetailLabel>Branch Name</DetailLabel>
            <DetailValue>{"sample"}</DetailValue>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex direction="column" alignItems="start">
            <DetailLabel>Code</DetailLabel>
            <DetailValue>{"sample"}</DetailValue>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex direction="column" alignItems="start">
            <DetailLabel>Region</DetailLabel>
            <DetailValue>{"sample"}</DetailValue>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex direction="column" alignItems="start">
            <DetailLabel>Address</DetailLabel>
            <DetailValue>{"sample"}</DetailValue>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex direction="column" alignItems="start">
            <DetailLabel>Address</DetailLabel>
            <DetailValue>{"sample"}</DetailValue>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex direction="column" alignItems="start">
            <DetailLabel>Address</DetailLabel>
            <DetailValue>{"sample"}</DetailValue>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex direction="column" alignItems="start">
            <DetailLabel>Address</DetailLabel>
            <DetailValue>{"sample"}</DetailValue>
          </Flex>
        </GridItem>






        <GridItem colSpan={5}>
          <Flex justifyContent="start">
            <Heading text="Socials" />
          </Flex>
        </GridItem>

        <GridItem>
          <Flex direction="column" alignItems="start">
            <DetailLabel>Branch Name</DetailLabel>
            <DetailValue>{"sample"}</DetailValue>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex direction="column" alignItems="start">
            <DetailLabel>Branch Name</DetailLabel>
            <DetailValue>{"sample"}</DetailValue>
          </Flex>
        </GridItem>








        <GridItem colSpan={5}>
          <Flex justifyContent="start">
            <Heading text="Guarantors" />
          </Flex>
        </GridItem>

        <GridItem>
          <Flex direction="column" alignItems="start">
            <DetailLabel>Branch Name</DetailLabel>
            <DetailValue>{"sample"}</DetailValue>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex direction="column" alignItems="start">
            <DetailLabel>Branch Name</DetailLabel>
            <DetailValue>{"sample"}</DetailValue>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex direction="column" alignItems="start">
            <DetailLabel>Code</DetailLabel>
            <DetailValue>{"sample"}</DetailValue>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex direction="column" alignItems="start">
            <DetailLabel>Region</DetailLabel>
            <DetailValue>{"sample"}</DetailValue>
          </Flex>
        </GridItem>


       

       
      </Grid>

      </StyledInformationModal>
      
    </Main>
  );
}

export default UserDetail;

export const StyledLabel = styled.div`
  font-size: 13.5px;
  line-height: 18px;
  margin-bottom: 10px;
`;



export const StyledInformationModal = styled.div`
  text-align: start;
 
  margin-bottom:20px;

  padding:40px;
  background: #FFFFFF;
border: 1px solid rgba(33, 63, 125, 0.06);
box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
border-radius: 4px;
`;





export const DetailLabel = styled.div`
  font-size: 13px;
  color: #979797;
  margin:5px;
`;

export const DetailValue = styled.div`
  font-size: 15px;
  color: black;
  margin:7px;
`;

