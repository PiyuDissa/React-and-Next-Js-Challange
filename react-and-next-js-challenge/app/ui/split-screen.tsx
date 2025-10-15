'use client';
import styled from "styled-components"; 
import { SplitScreenProps } from '../lib/definitions';
import { Children } from "react";

const Container = styled.div`
	display: flex;
	flex-direction: row;
`;

const Pane = styled.div<{ weight?: number }>`
	flex: ${props => props.weight || 1};
	padding: 10px;
`;

export default function SplitScreen({leftWeight = 1, rightWeight = 1, children}: SplitScreenProps) {
	const [ left, right ] = children;
	
	return (
		<Container>
			<Pane weight={leftWeight}>
				{left}
			</Pane>
			<Pane weight={rightWeight}>
				{right}
			</Pane>
		</Container>
	)
}
