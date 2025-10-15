'use client';
import styled from "styled-components"; 
import { SplitScreenProps } from '../lib/definitions';

const Container = styled.div`
	display: flex;
	flex-direction: row;
`;

const Pane = styled.div<{ weight?: number }>`
	flex: ${props => props.weight || 1};
	padding: 10px;
`;

export default function SplitScreen({left: Left, leftWeight = 1, right: Right, rightWeight = 1}: SplitScreenProps) {
	return (
		<Container>
			<Pane weight={leftWeight}>
				<Left />
			</Pane>
			<Pane weight={rightWeight}>
				<Right />
			</Pane>
		</Container>
	)
}
