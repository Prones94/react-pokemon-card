    import React, { useState } from 'react';

    const useFlip = () => {
      const [isFlipped, setIsFlipped] = useState(true)
      const toggleFlip = () => setIsFlipped((flipped) => !flipped)

      return [isFlipped, toggleFlip]
    }

    export default useFlip