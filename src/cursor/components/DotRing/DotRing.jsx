import React, { useContext, useRef, useEffect, useCallback } from "react";
import "./DotRing.scss";
import useMousePosition from "../../hooks/useMousePosition";
import { MouseContext } from "../../context/mouse-context";

const DotRing = () =>
{
	const { cursorType } = useContext( MouseContext );
	const { x, y } = useMousePosition();
	const secondaryCursor = useRef( null );
	const positionRef = useRef( {
		mouseX: 0,
		mouseY: 0,
		destinationX: 0,
		destinationY: 0,
		distanceX: 0,
		distanceY: 0,
		key: -1,
	} );

	useEffect( () =>
	{
		secondaryCursor.current.style.opacity = 1;
		document.addEventListener( "mousemove", ( event ) =>
		{
			const { clientX, clientY } = event;

			const mouseX = clientX;
			const mouseY = clientY;

			positionRef.current.mouseX =
				mouseX - secondaryCursor?.current?.clientWidth / 2;
			positionRef.current.mouseY =
				mouseY - secondaryCursor?.current?.clientHeight / 2;
		} );

		return document.removeEventListener( "mousemove", () => { } );
	}, [] );

	const followMouse = () =>
	{
		positionRef.current.key = requestAnimationFrame( followMouse );
		const { mouseX, mouseY, destinationX, destinationY, distanceX, distanceY } =
			positionRef.current;
		if ( !destinationX || !destinationY )
		{
			positionRef.current.destinationX = mouseX;
			positionRef.current.destinationY = mouseY;
		} else
		{
			positionRef.current.distanceX = ( mouseX - destinationX ) * 0.05;
			positionRef.current.distanceY = ( mouseY - destinationY ) * 0.05;
			if (
				Math.abs( positionRef?.current?.distanceX ) +
				Math.abs( positionRef?.current?.distanceY ) <
				0.05
			)
			{
				positionRef.current.destinationX = mouseX;
				positionRef.current.destinationY = mouseY;
			} else
			{
				positionRef.current.destinationX += distanceX;
				positionRef.current.destinationY += distanceY;
			}
		}
		if ( secondaryCursor && secondaryCursor.current )
			secondaryCursor.current.style.transform = `translate3d(${ destinationX - 1.75
				}px, ${ destinationY - 1.75 }px, 0)`;
	};
	
	useEffect( () =>
	{
		followMouse();
	}, []);

	return (
		<>
			<div
				// style={{ left: `${x}px`, top: `${y}px` }}
				id="cursor-ring"
				className={"ring " + cursorType}
				ref={secondaryCursor}>
				<div className="ring__inner"></div>
			</div>
			<div
			id="cursor-dot"
				className={"dot " + cursorType}
				style={{ left: `${x}px`, top: `${y}px` }}></div>
		</>
	);
};

export default DotRing;
