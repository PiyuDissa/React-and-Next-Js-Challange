'use client';
import styled from "styled-components"; 
import React from "react";

const ModalBackground = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalBody = styled.div`
	background: white;
	padding: 20px;
	border-radius: 8px;
	min-width: 300px;
	min-height: 150px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Div = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const ButtonOpen = styled.button`
	background: blue;
	color: white;
	border: none;
	padding: 5px 10px;
	border-radius: 4px;
	cursor: pointer;
	&:hover {
		background: darkblue;	
}`;

const ButtonClose = styled.button`
	background: red;
	color: white;
	border: none;
	padding: 5px 10px;
	border-radius: 4px;
	cursor: pointer;
	&:hover {
		background: darkred;	
}`;

export default function Modal ({children} : {children: React.ReactNode}) {
	const [isVisible, setIsVisible] = React.useState(false);

	return (
		<>
			<ButtonOpen onClick ={()=> setIsVisible (true)}>Open Modal</ButtonOpen>
			{isVisible && (
				<ModalBackground onClick = {() => setIsVisible(false)}>
					<ModalBody onClick={(e) => e.stopPropagation()}>
						<Div>
							<ButtonClose onClick = {() => setIsVisible(false)}>Close</ButtonClose>
						</Div>
						{children}
					</ModalBody>
				</ModalBackground>
			)}
		</>
	)
}