<template>
  <div>
    <h1>Buttons</h1>
    <div class="flex flex-col gap-4">
      <div class="grid grid-cols-5 gap-2 justify-items-center">
        <HBtn>
          My label
        </HBtn>
        <HBtn disabled>
          My label
        </HBtn>
        <HBtn loading>
          My label
        </HBtn>
        <HBtn disabled loading>
          My label
        </HBtn>
        <HBtn>
          <IconoirTrash /> My label
        </HBtn>
      </div>
      <div class="grid grid-cols-5 gap-2  justify-items-center">
        <HBtn variant="outlined">
          My label
        </HBtn>
        <HBtn disabled variant="outlined">
          My label
        </HBtn>
        <HBtn loading variant="outlined">
          My label
        </HBtn>
        <HBtn disabled loading variant="outlined">
          My label
        </HBtn>
        <HBtn variant="outlined">
          <IconoirTrash /> My label
        </HBtn>
      </div>
      <div class="grid grid-cols-5 gap-2  justify-items-center">
        <HBtn icon>
          <IconoirTrash />
        </HBtn>
        <HBtn icon disabled>
          <IconoirTrash />
        </HBtn>
        <HBtn icon variant="outlined">
          <IconoirTrash />
        </HBtn>
        <HBtn icon disabled variant="outlined">
          <IconoirTrash />
        </HBtn>
      </div>
    </div>
  </div>
</template>
