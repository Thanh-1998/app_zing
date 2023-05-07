function IconArrow({ direction }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width="24px"
      height="24px"
      viewBox="0 0 290.000000 174.000000"
      preserveAspectRatio="xMidYMid meet"
      style={{ transform: `rotate(${direction ?? 0}deg)` }}
    >
      <g transform="translate(0.000000,174.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
        <path d="M1984 1728 c-24 -11 -44 -48 -44 -81 0 -15 102 -123 337 -359 l338 -338 -1278 0 -1278 0 -24 -25 c-33 -32 -33 -78 0 -110 l24 -25 1278 0 1278 0 -338 -338 c-235 -236 -337 -344 -337 -359 0 -58 50 -101 102 -88 14 4 193 175 436 418 384 384 412 415 412 447 0 32 -28 63 -418 452 -436 437 -432 434 -488 406z" />
      </g>
    </svg>
  );
}

export default IconArrow;
