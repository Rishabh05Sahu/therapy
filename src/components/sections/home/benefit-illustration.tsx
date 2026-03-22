type BenefitIllustrationProps = {
  type: "tree" | "stones" | "brain";
};

export function BenefitIllustration({ type }: BenefitIllustrationProps) {
  if (type === "stones") {
    return (
      <svg
        viewBox="0 0 700 420"
        className="w-full max-w-[520px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 360C120 360 140 300 190 250C240 200 260 180 320 180C390 180 410 250 470 250C530 250 540 200 610 200C650 200 675 220 700 250"
          stroke="#F4EFE2"
          strokeWidth="3"
        />
        <g opacity="0.85">
          <path d="M330 120C300 120 280 145 280 180C280 215 300 240 330 240C360 240 380 215 380 180C380 145 360 120 330 120Z" fill="#CFAFC5" fillOpacity="0.45"/>
          <path d="M420 180C390 180 370 205 370 240C370 275 390 300 420 300C450 300 470 275 470 240C470 205 450 180 420 180Z" fill="#CFAFC5" fillOpacity="0.45"/>
          <path d="M500 220C470 220 450 245 450 280C450 315 470 340 500 340C530 340 550 315 550 280C550 245 530 220 500 220Z" fill="#CFAFC5" fillOpacity="0.45"/>
        </g>
        <path d="M325 110C300 115 285 140 287 172C289 205 305 234 331 236C357 238 375 216 376 182C378 148 360 122 325 110Z" stroke="#F4EFE2" strokeWidth="3"/>
        <path d="M328 102C340 88 359 86 369 98C379 110 376 130 361 141C346 152 327 149 317 137C307 125 312 114 328 102Z" stroke="#F4EFE2" strokeWidth="3"/>
        <path d="M425 168C400 172 380 195 378 227C376 260 392 291 421 296C450 301 472 280 476 248C480 214 462 186 425 168Z" stroke="#F4EFE2" strokeWidth="3"/>
        <path d="M492 210C470 214 454 236 454 266C454 297 471 323 499 327C527 331 548 309 549 279C550 246 529 218 492 210Z" stroke="#F4EFE2" strokeWidth="3"/>
        <path d="M286 170C260 150 250 125 258 102C266 79 292 71 313 84" stroke="#F4EFE2" strokeWidth="3"/>
        <path d="M548 278C574 275 594 287 603 309C612 331 602 353 580 360" stroke="#F4EFE2" strokeWidth="3"/>
      </svg>
    );
  }

  if (type === "brain") {
    return (
      <svg
        viewBox="0 0 700 420"
        className="w-full max-w-[500px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="235" y="70" width="230" height="260" rx="90" fill="#D9C6C0" fillOpacity="0.55" />
        <path d="M350 40C300 40 255 65 240 110C215 115 200 135 200 165C200 184 206 200 218 212C208 225 204 239 204 257C204 297 234 325 272 327C292 355 321 370 350 370C379 370 408 355 428 327C466 325 496 297 496 257C496 239 492 225 482 212C494 200 500 184 500 165C500 135 485 115 460 110C445 65 400 40 350 40Z" stroke="#F4EFE2" strokeWidth="3"/>
        <path d="M350 70V338" stroke="#F4EFE2" strokeWidth="3"/>
        <path d="M286 104C314 112 324 132 324 154C324 180 307 192 288 202C268 212 258 228 262 247C266 268 282 277 298 282" stroke="#F4EFE2" strokeWidth="3"/>
        <path d="M414 104C386 112 376 132 376 154C376 180 393 192 412 202C432 212 442 228 438 247C434 268 418 277 402 282" stroke="#F4EFE2" strokeWidth="3"/>
        <path d="M322 196C340 206 347 218 347 236C347 254 338 266 324 278" stroke="#F4EFE2" strokeWidth="3"/>
        <path d="M378 196C360 206 353 218 353 236C353 254 362 266 376 278" stroke="#F4EFE2" strokeWidth="3"/>
        <path d="M245 153C267 160 280 174 281 195" stroke="#F4EFE2" strokeWidth="3"/>
        <path d="M455 153C433 160 420 174 419 195" stroke="#F4EFE2" strokeWidth="3"/>
        <path d="M263 300C285 292 299 296 316 311" stroke="#F4EFE2" strokeWidth="3"/>
        <path d="M437 300C415 292 401 296 384 311" stroke="#F4EFE2" strokeWidth="3"/>
        <path d="M200 340H300" stroke="#F4EFE2" strokeWidth="3"/>
        <path d="M400 340H500" stroke="#F4EFE2" strokeWidth="3"/>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 700 420"
      className="w-full max-w-[540px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 335H220C260 335 290 310 290 270V252C290 205 316 182 360 182H700" stroke="#F4EFE2" strokeWidth="3"/>
      <path d="M465 145C450 90 406 60 350 60C273 60 220 113 220 190C220 255 265 313 335 319C351 340 372 350 395 350C420 350 444 339 458 320C525 310 570 253 570 190C570 159 561 130 541 108C526 76 499 56 465 53" fill="#B7B08A" fillOpacity="0.85"/>
      <path d="M455 110C430 82 393 68 350 68C276 68 228 121 228 190C228 255 276 305 345 311C363 330 378 339 396 339C414 339 429 330 442 312C505 304 562 251 562 190C562 156 550 126 532 106" stroke="#F4EFE2" strokeWidth="3"/>
      <path d="M275 220C262 205 255 190 256 170C257 145 274 127 297 126C312 102 332 90 355 92C375 76 404 78 423 95C450 91 473 109 476 136C499 144 512 165 510 188C528 205 532 232 518 253C506 271 487 280 466 278C456 296 438 308 416 309C400 325 376 331 354 322C330 332 306 324 290 307C265 304 245 288 240 264C218 255 205 234 208 209C211 183 229 165 250 159" stroke="#F4EFE2" strokeWidth="3"/>
      <path d="M348 108C346 135 350 156 365 174C382 194 406 202 431 201" stroke="#F4EFE2" strokeWidth="3"/>
      <path d="M320 126C322 155 316 180 295 199C277 216 258 222 239 220" stroke="#F4EFE2" strokeWidth="3"/>
      <path d="M325 229C348 221 373 222 395 233C415 243 430 260 438 283" stroke="#F4EFE2" strokeWidth="3"/>
      <path d="M315 232C294 235 276 249 266 266C255 285 252 302 257 319" stroke="#F4EFE2" strokeWidth="3"/>
      <path d="M407 118C414 133 428 144 443 149" stroke="#F4EFE2" strokeWidth="3"/>
      <path d="M285 118C276 133 262 145 247 151" stroke="#F4EFE2" strokeWidth="3"/>
    </svg>
  );
}