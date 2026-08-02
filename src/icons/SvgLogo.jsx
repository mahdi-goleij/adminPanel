export const SvgLogo = ({ className }) => {
  return (
    <>
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        fill="none"
      >
        {/* حرف M */}
        <path
          d="M20 70V30L36 50L52 30V70"
          stroke="#BFF747"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* حرف G */}
        <path
          d="M78 42C76.5 35 71.5 30 64 30C54.5 30 47 38 47 50C47 62 54.5 70 64 70C71.5 70 77 64 78 56H64"
          stroke="#BFF747"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* نقطه دکوراتیو کوچک */}
        <circle cx="83" cy="70" r="4.5" fill="#BFF747" />
      </svg>
    </>
  );
};