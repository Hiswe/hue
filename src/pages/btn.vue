<template>
  <div>
    <h1>Buttons</h1>
    <div class="flex flex-col gap-4">
      <div class="grid grid-cols-6 gap-2 justify-items-center">
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
        <HBtn dir="rtl">
          <IconoirArrowRight /> My label
        </HBtn>
      </div>
      <div class="grid grid-cols-6 gap-2  justify-items-center">
        <HBtn variant="flat">
          My label
        </HBtn>
        <HBtn disabled variant="flat">
          My label
        </HBtn>
        <HBtn loading variant="flat">
          My label
        </HBtn>
        <HBtn disabled loading variant="flat">
          My label
        </HBtn>
        <HBtn variant="flat">
          <IconoirTrash /> My label
        </HBtn>
        <HBtn variant="flat" dir="rtl">
          <IconoirArrowRight /> My label
        </HBtn>
      </div>
      <div class="grid grid-cols-6 gap-2  justify-items-center">
        <HBtn variant="text">
          My label
        </HBtn>
        <HBtn disabled variant="text">
          My label
        </HBtn>
        <HBtn loading variant="text">
          My label
        </HBtn>
        <HBtn disabled loading variant="text">
          My label
        </HBtn>
        <HBtn variant="text">
          <IconoirTrash /> My label
        </HBtn>
        <HBtn variant="text" dir="rtl">
          <IconoirArrowRight /> My label
        </HBtn>
      </div>
      <div class="grid grid-cols-6 gap-2  justify-items-center">
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
