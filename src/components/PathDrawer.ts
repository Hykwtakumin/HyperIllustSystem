export type Points = {
  x: number;
  y: number;
};

export const getPoint = (event: PointerEvent): Points => {
  let x, y;
  let rect = event.srcElement.getBoundingClientRect();
  let dx = rect.left + window.pageXOffset;
  let dy = rect.top + window.pageYOffset;
  x = event.pageX - dx;
  y = event.pageY - dy;
  return { x, y };
};

export const addPath = (canvas: SVGElement, point: Points): SVGPathElement => {
  const pathElm: SVGPathElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  const initialPoint = `M ${point.x} ${point.y} `;
  pathElm.setAttribute("d", initialPoint);
  pathElm.setAttribute("fill", "none");
  pathElm.setAttribute("pointer-events", "none");
  canvas.appendChild(pathElm);
  return pathElm;
};

export const drawPath = (path: SVGPathElement, point: Points) => {
  let pointsArray: string = path.getAttribute("d");
  const movement = ` L ${point.x} ${point.y}`;
  pointsArray += movement;
  path.setAttribute("d", pointsArray);
};

export const setPointerEventsEnableToAllPath = (canvas: SVGElement) => {
  const allPathList = Array.from(canvas.querySelectorAll("path"));
  console.dir(allPathList);
  allPathList.forEach(path => {
    path.setAttribute("pointer-events", "auto");
  });
};

export const setPointerEventsDisableToAllPath = (canvas: SVGElement) => {
  const allPathList = Array.from(canvas.querySelectorAll("path"));
  console.dir(allPathList);
  allPathList.forEach(path => {
    path.setAttribute("pointer-events", "none");
  });
};
